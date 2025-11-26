'use server';

/**
 * @fileOverview An AI-powered chatbot for answering questions about Lion Code Technologies' services.
 *
 * - answerServiceQuery - A function that handles the chatbot query process.
 * - AnswerServiceQueryInput - The input type for the answerServiceQuery function.
 * - AnswerServiceQueryOutput - The return type for the answerServiceQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerServiceQueryInputSchema = z.object({
  query: z.string().describe('The user query about Lion Code Technologies services.'),
});
export type AnswerServiceQueryInput = z.infer<typeof AnswerServiceQueryInputSchema>;

const AnswerServiceQueryOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query.'),
});
export type AnswerServiceQueryOutput = z.infer<typeof AnswerServiceQueryOutputSchema>;

export async function answerServiceQuery(input: AnswerServiceQueryInput): Promise<AnswerServiceQueryOutput> {
  return answerServiceQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerServiceQueryPrompt',
  input: {schema: AnswerServiceQueryInputSchema},
  output: {schema: AnswerServiceQueryOutputSchema},
  prompt: `You are a chatbot for Lion Code Technologies, a Sri Lankan based software company that automates business processes and solves business problems using IT.  Use white, black, red, and yellow in your answer if appropriate.

  Answer the following question about the company's services:

  {{query}}

  Direct the user to relevant services or information on the website if possible.
`,
});

const answerServiceQueryFlow = ai.defineFlow(
  {
    name: 'answerServiceQueryFlow',
    inputSchema: AnswerServiceQueryInputSchema,
    outputSchema: AnswerServiceQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
