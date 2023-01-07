import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';
import { BorderedAnchor } from '../../utils';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <OpinionAnchor href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <Content>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </Content>
      </Wrapper>
    </OpinionAnchor>
  );
};

const OpinionAnchor = styled(BorderedAnchor)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;
    :not(:last-of-type) {
      padding: 0;
      border-bottom: none;
    }
    :not(:first-of-type) {
      padding: 0;
    } 
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  gap: 24px;

  @media ${QUERIES.tabletOnly} {
    display: revert;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
