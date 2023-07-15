import { Datatype } from '../enum';
import { z } from 'zod';

export const memberPropertySchema = z.object({
  property: z.string({
    description: 'Name of the property',
    required_error: 'property is a required field',
    invalid_type_error: 'string type is expected for property field'
  }),
  type: z.nativeEnum(Datatype, {
    description: 'Type of the property',
    required_error: 'type is a required field',
    invalid_type_error: 'invalid value for type field'
  })
});
