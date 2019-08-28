import {FormControl, FormGroup} from '@angular/forms';
import {isArray, isObject} from './utils/logic';
import {generateRandomString} from './utils/string';

type InputPrimitive = StringConstructor | BooleanConstructor | NumberConstructor;

type InputSchema = InputConfig | InputConfig[];

interface InputConfig {
  [field: string]: InputPrimitive;
}

export class StandaloneWrapperDataSchema {
  inputs: {
    [field: string]: InputSchema[] | InputSchema | InputPrimitive
  };
  outputs: string[];
}

const getArrayFieldFormControls = () => new FormGroup({
  entryCount: new FormControl(10),
  includeDuplicates: new FormControl(false),
});

const getFormGroupForType = type => {
  switch (type) {
    case 'string':
      return new FormGroup({
        minTextLength: new FormControl(5),
        maxTextLength: new FormControl(20),
        includeNonAlphanumericCharacters: new FormControl(true)
      });
    case 'boolean':
      return new FormGroup({
        alwaysTrue: new FormControl(true)
      });
    default:
  }
};

const getFormGroup = (inputSchema) => {
  // Note: this wont work for nested inputs, if that is required this must be refactored
  const formControls: {
    entries?: any
    values?: any
  } = {};
  let schema = inputSchema;

  if (isArray(inputSchema)) {
    formControls.entries = getArrayFieldFormControls();
    schema = (inputSchema)[0];
  }

  if (isObject(schema)) {
    Object.entries(schema).forEach(([fieldName, fieldType]) => {
      formControls[fieldName] = getFormGroupForType((fieldType as InputPrimitive).name.toLowerCase());
    });
  } else {
    formControls.values = new FormControl(new (schema as any)());
  }
  return new FormGroup(formControls);
};

export class StandaloneWrapperController {

  constructor(standaloneWrapperDataSchema: StandaloneWrapperDataSchema) {
    this.outputs = standaloneWrapperDataSchema.outputs;
    this.inputs = standaloneWrapperDataSchema.inputs;
    Object.entries(standaloneWrapperDataSchema.inputs)
      .forEach(([inputName, inputSchema]) => {
        this.inputForms[inputName] = getFormGroup(inputSchema);
      });
  }

  outputs: string[] = [];

  inputs: {
    [field: string]: InputSchema[] | InputSchema | InputPrimitive
  };

  inputForms: {
    [formName: string]: FormGroup
  } = {};

  autoGeneratedData: object;

  static getAutoGeneratedDataFromInputPrimitive(
    fieldValues: { [prop: string]: any },
    inputPrimitive: InputPrimitive
  ): string | number | boolean {
    switch (inputPrimitive.name.toLowerCase()) {
      case 'string':
        return generateRandomString(
          fieldValues.minTextLength,
          fieldValues.maxTextLength,
          fieldValues.includeNonAlphanumericCharacters,
        );
      case 'number':
        return 1234;
      case 'boolean':
        return true;
    }
  }

  getAutoGeneratedDataFromInputSchema(
    fieldValues: { [prop: string]: any },
    inputSchema: InputSchema
  ): { [prop: string]: string | number | boolean } {
    return Object.entries(inputSchema).reduce((acc, [schemaFieldName, inputPrimitive]) => ({
      ...acc,
      [schemaFieldName]: StandaloneWrapperController.getAutoGeneratedDataFromInputPrimitive(fieldValues[schemaFieldName], inputPrimitive)
    }), {});
  }


  getAutoGeneratedDataForConfigField(
    [configFieldName, configFieldSchema]: [string, InputSchema[] | InputSchema | InputPrimitive]
  ): any {
    const fieldFormValues = this.inputForms[configFieldName].value;
    if (isArray(configFieldSchema)) {
      return Array.from({length: fieldFormValues.entries.entryCount || 0}).map(() =>
        isObject(configFieldSchema[0]) ?
          this.getAutoGeneratedDataFromInputSchema(fieldFormValues, (configFieldSchema[0] as InputSchema)) :
          StandaloneWrapperController.getAutoGeneratedDataFromInputPrimitive(fieldFormValues, (configFieldSchema as InputPrimitive))
      );
    } else if (isObject(configFieldSchema)) {
      return this.getAutoGeneratedDataFromInputSchema(fieldFormValues, (configFieldSchema as InputSchema));
    } else {
      StandaloneWrapperController.getAutoGeneratedDataFromInputPrimitive(fieldFormValues, (configFieldSchema as InputPrimitive));
    }
  }

  getAllAutoGeneratedData() {
    return Object.entries(this.inputs).reduce((acc, configFieldInputEntry) => ({
      ...acc,
      [configFieldInputEntry[0]]: this.getAutoGeneratedDataForConfigField(configFieldInputEntry)
    }), {});
  }

  setData(data) {
    // need to do validation here
    this.autoGeneratedData = data;
  }

  getData() {
    const inputFormValues = Object.entries(this.inputForms).reduce((acc, [fieldName, form]) => ({
      ...acc,
      [fieldName]: form.value
    }), {});
    return {
      inputFormValues,
      autoGeneratedData: this.autoGeneratedData || {}
    };
  }

  generateData() {
    this.autoGeneratedData = this.getAllAutoGeneratedData();
  }
}
