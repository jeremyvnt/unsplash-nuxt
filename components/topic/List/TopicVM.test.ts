import { describe, expect, it } from 'vitest';
import type { TopicVM } from '~/components/topic/List/TopicVM';
import { mapFromTopicBasic } from '~/components/topic/List/TopicVM';
import { architectureInteriorTopic } from '~/fixtures/topics';

describe('mapFromTopicBasic', () => {
  it('should map Topic entity to VM correctly', async () => {
    // Arrange
    const expectedVM: TopicVM = {
      id: 'architecture-interior',
      name: 'Architecture & Interiors',
      href: '/topics/architecture-interior',
    };

    // Act
    const result = mapFromTopicBasic(architectureInteriorTopic);

    // Assert
    expect(result).toEqual(expectedVM);
  });
});
