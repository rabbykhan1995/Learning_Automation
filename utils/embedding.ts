import { embed } from 'ai';
import { ModelRouterEmbeddingModel } from '@mastra/core/llm';

const embeddingModel = new ModelRouterEmbeddingModel(
  'openai/text-embedding-3-small'
);

export async function embedText(text: string) {
  const { embedding, usage } = await embed({
    model: embeddingModel,
    value: text,
  });

  return {
    embedding,
    usage,
  };
}