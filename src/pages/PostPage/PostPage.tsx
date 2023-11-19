import blogData from '@/data/blogData'
import React from 'react'
import { useParams } from 'react-router-dom'
import * as S from "./postPage.styled"
import { BookOpen, Calendar, Eye, Pause, Play, Share } from 'lucide-react'
import Button from '@/components/Button'
import colors from '@/styles/theme'
import { TypeAnimation } from "react-type-animation"
import { motion } from 'framer-motion'
import { useQuery } from 'react-query'
import api from '@/services/api'
import { format } from 'date-fns'

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = React.useState<IPost | null>(null)
  const [paragraphs, setParagraphs] = React.useState<string[]>([])
  const [index, setIndex] = React.useState(0)
  const refs = React.useRef<HTMLSpanElement[]>([])
  const { } = useQuery<IPost>({
    queryKey: "posts",
    queryFn: () => api.get(`/blog-post/${id}`).then((res) => res.data),
    onSuccess: (data) => setPost(data)
  })
  const [paused, setPaused] = React.useState(true)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    if (!post || paused) return
    if (index === post.content.length) return
    setParagraphs(prev => [...prev, post.content[index]])
  }, [index, refs.current, post, paused])

  const handleNext = () => {
    setIndex(prev => prev + 1)
    refs.current[index].setAttribute("data-typing", "false")
  }

  if (!post) return null
  return (
    <S.Container>
      <S.Header>
        <S.Image src={post.imageUrl} />
        <S.Info>
          <S.Title>
            {post?.title}
          </S.Title>
          <S.Description>
            <S.DescItem>
              <BookOpen color='#fff' size={16} />
              <S.DescText>
                Tempo de leitura: {post.readingTimeMin} minutos
              </S.DescText>
            </S.DescItem>

            <S.DescItem>
              <Calendar color='#fff' size={16} />
              <S.DescText>
                {post.createdAt}
              </S.DescText>
            </S.DescItem>
          </S.Description>
        </S.Info>
      </S.Header>

      <S.Share>
        <Button.Root
          style={{ width: "fit-content" }}
        >
          <Button.Text>Compartilhar</Button.Text>
          <Button.Icon>
            <Share color={colors.red} />
          </Button.Icon>
        </Button.Root>
      </S.Share>

      <S.Content>
        {paragraphs.map((p, index) => (
          <S.Paragraph
            as={motion.span}
            initial={{ x: "-5%" }}
            animate={{ x: 0 }}
            data-typing={!shown}
            transition={{ type: "spring" }}
            ref={(el) => refs.current[index] = el!}
            key={p.length}
          >
            {shown ?
              <span>{p}</span>
              : <TypeAnimation
                sequence={[p, 400, handleNext]}
                repeat={undefined}
                cursor={false}
                speed={70}
              />}
          </S.Paragraph>
        ))}
      </S.Content>

      <S.Controls data-paused={paused && !shown}>
        <Button.Root
          radius={8}
          disabled={shown}
          onClick={() => setPaused(prev => !prev)}>
          <Button.Text size={1.125}>
            {paused ? "Começar" : "Pausar"}
          </Button.Text>
          <Button.Icon>
            {paused ? <Play /> : <Pause />}
          </Button.Icon>
        </Button.Root>
        <Button.Root
          radius={8}
          disabled={shown}
          onClick={() => {
            setParagraphs(post.content)
            setShown(true)
          }}>
          <Button.Text size={1.125}>
            Exibir
          </Button.Text>
          <Button.Icon>
            <Eye />
          </Button.Icon>
        </Button.Root>
      </S.Controls>
    </S.Container>
  )
}
export default PostPage

