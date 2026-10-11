import  { Editor } from './editor'

interface PageProps {
    params: Promise<{
        documentId: string
    }>
}

const Page = async ({ params }: PageProps) => {
    const { documentId } = await params
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Editor />
        </div>
    )
}

export default Page