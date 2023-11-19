import React from 'react'
import * as S from "./blog.styled";
import { SubTitle } from '@/components/Text';
import BlogList from '@/interfaces/BlogList';

const Blog = () => {
  return (
    <S.Container>
      <SubTitle>Blog</SubTitle>

      <BlogList />
    </S.Container>
  )
}

export default Blog
