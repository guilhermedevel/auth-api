import { z } from 'zod';
import dotenv from 'dotenv';

import ConstantsSchema from '../shared/validations/constants';
import { IConstants } from './models/constants';
import { Environments } from '../shared/enums/environments';

type ConstantsSchemaType = z.output<typeof ConstantsSchema>;

dotenv.config();

const parse = (): ConstantsSchemaType => {
  let constants: ConstantsSchemaType = null;

  try {
    constants = ConstantsSchema.parse(process.env);
  } catch (error) {
    console.log('Error when initializing the application in constants parse');
  }

  return constants;
};

const Constants: IConstants = {} as IConstants;

const setConstants = () => {
  const config = parse();

  Constants.env = config.NODE_ENV as Environments;
  Constants.port = Number(config.PORT);
};

export const getEnv = (): IConstants => {
  if (!Object.keys(Constants).length) {
    setConstants();
  };

  return Constants;
};

export const initializeConstants = () => {
  setConstants();

  console.log('Environment initialized');
};