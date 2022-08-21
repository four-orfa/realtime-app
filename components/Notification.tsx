import { FC } from 'react'
import { useQueryNotices } from '../hooks/useQueryNotices'
import { useSubscribeNotice } from '../hooks/useSubscribeNotice'
import NoticeItem from './NoticeItem'
import NoticeForm from './NoticeForm'

const Notification: FC = () => {
  const { data: notices } = useQueryNotices()
  useSubscribeNotice()

  return (
    <>
      <p className="mb-3 ">Notification</p>
      <NoticeForm />
      <ul data-testid="ul-notice" className="my-5">
        {notices?.map((notice) => (
          <NoticeItem
            key={notice.id}
            id={notice.id}
            content={notice.content}
            user_id={notice.user_id}
          />
        ))}
      </ul>
    </>
  )
}

export default Notification
