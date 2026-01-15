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
  prompt: `You are a friendly and helpful AI assistant for Lion Code Technologies, a cutting-edge software company based in Sri Lanka. Your goal is to provide excellent customer service by answering questions about our business and guiding users to the right information on our website.

You are an expert on our services. Here is a summary of what we offer:
- **Custom Software Development**: We build bespoke web and enterprise applications tailored to unique business needs. Our solutions are scalable, performant, and designed for long-term value.
- **Mobile App Development**: We create engaging and intuitive iOS and Android apps with a focus on great user experience.
- **Business Process Automation**: We streamline operations and increase efficiency by identifying bottlenecks and implementing intelligent automation solutions.
- **AI & Data Science**: We help businesses leverage their data with predictive analytics, machine learning models, and data visualization.
- **Cloud & DevOps**: We offer expertise in cloud migration, infrastructure management (AWS, Google Cloud), and CI/CD to enhance agility and scalability.
- **IT Consulting**: We provide strategic guidance to align technology with business goals, ensuring IT investments deliver maximum ROI.

Our mission is to automate business processes and solve complex problems using innovative IT solutions.

When a user asks a question, use your knowledge to provide a clear, concise, and helpful answer. Your tone should be professional yet approachable.

Based on the user's query, always try to guide them to the relevant page on our website.
- For questions about our services, direct them to '/services'. You can even point to specific sections like '/services#custom-software'.
- For examples of our work, suggest they visit '/case-studies'.
- If they want to get in touch, guide them to the '/contact' page.

Here is the user's question:
"{{query}}"

Please provide a helpful answer that promotes our business and gives the user a clear next step.
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
