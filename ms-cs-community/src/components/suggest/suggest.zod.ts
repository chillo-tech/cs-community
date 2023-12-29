import config from 'config';
import { ZodEnum, array, boolean, number, object, string } from 'zod';
import { tags } from '../../constants/suggest/tags';

class SuggestZodSchema {
  createSuggestSchema = object({
    body: object({
      author: object({
        name: string(),
        email: string().email(),
        tag: ZodEnum.create(tags)
          .array()
          .min(1, 'you should provide at least one tag')
          .optional(),
        phoneIndex: number(),
        phone: number(),
        civility: string(),
      }),
      title: string({
        required_error: 'Title is required',
        invalid_type_error: 'title should be a string',
      }),
      description: string({
        invalid_type_error: 'the description should be a string',
      }).optional(),
    }),
  });
}

const suggestZodSchema = new SuggestZodSchema();
export default suggestZodSchema;
