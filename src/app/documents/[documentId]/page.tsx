import  { Editor } from './editor'
import  { Toolbar } from './toolbar'

interface PageProps {
    params: Promise<{
        documentId: string
    }>
}

const Page = async ({ params }: PageProps) => {
    const { documentId } = await params
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Toolbar />
            <Editor />
        </div>
    )
}

export default Page