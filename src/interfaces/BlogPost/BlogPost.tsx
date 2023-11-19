import React from 'react'
import * as S from "./blogPost.styled"
import { Link } from "react-router-dom"
import Button from '@/components/Button'
import { ExternalLink } from 'lucide-react'

interface IProps {
  p: IPost
}

const BlogPost = ({ p }: IProps) => {
  return (
    <S.BlogContainer key={p.id}>
      <S.BlogPost>
        <Link to={`/blog/${p.id}`}>
          <S.BlogTitle>{p.title}</S.BlogTitle>
        </Link>
        <S.BlogContent>{p.content[0]}</S.BlogContent>
        <Link to={`/blog/${p.id}`}>
          <Button.Root style={{ width: "fit-content" }}>
            <Button.Text>Ler mais</Button.Text>
            <Button.Icon>
              <ExternalLink size={16} strokeWidth={3} />
            </Button.Icon>
          </Button.Root>
        </Link>
      </S.BlogPost>
      <Link to={`/blog/${p.id}`}>
        <S.BlogImage src={p.imageUrl} />
      </Link>
    </S.BlogContainer>

  )
}

export default BlogPost
