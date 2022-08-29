import { useQuery } from 'react-query'
import { supabase } from '../utils/supabase'
import { Comment } from '../types'

const useQueryComments = (postId: string) => {
  const getComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', postId)
      .order('created_at', { ascending: true })

    if (error) {
      throw new Error(error.message)
    }
    return data
  }

  return useQuery<Comment[], Error>({
    queryKey: ['Comments', postId],
    queryFn: getComments,
    staleTime: Infinity,
  })
}

export default useQueryComments
