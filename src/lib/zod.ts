import { z } from 'zod';

const words: { en: string, ru: string }[] = [{ en: 'latitude', ru: 'Широта' }, { en: 'longitude', ru: 'Долгота' }]

const translatePropToRussian = (prop: string) => {
  return words.find(word => word.en == prop)?.ru
}

export const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === 'number') {
      return { message: `${ translatePropToRussian(issue.path[0].toString()) } должна быть числом` };
    }
  }

  return { message: ctx.defaultError };
};
