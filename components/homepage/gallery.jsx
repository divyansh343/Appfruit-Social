import React from 'react'
import Image from 'next/image'


const medGallery = [
    {
        id: "5",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1572798177358-9402eeb43f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
        id: "6",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1588093184350-5fd1a1381b96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
        id: "2",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: "1",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: "4",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1629264903759-2b7454882272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGluZGlhfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: "3",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1570341224661-39af39637b08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGZhc2hpb24lMjBpbmRpYXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
    },
]

const smGallery = [
    {
        id: "7",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1572943549994-ee6249cc7ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxpbmRpYXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: "8",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1634942536846-e9863ef9e78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW91dHViZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: "5",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1572798177358-9402eeb43f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
        id: "4",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eW91dHViZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: "6",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1588093184350-5fd1a1381b96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
        id: "2",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: "1",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1634942536990-44b9aba4c712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHlvdXR1YmV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: "3",
        name: "influencer working with social media marketing agency thesocialchats",
        url: "https://images.unsplash.com/photo-1583668268401-eb983f84d65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxpbmRpYXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
    },
]
const Gallery = ({ pagefor }) => {

    // const choose = () => {
    //     if(pagefor === "brandPage")
    //     return smGallery.reverse()
    //     else smGallery
    // }
    // const smOne = choose();
    return (
        <>
            <div className="container mx-auto px-4">

                {/* <section className="py-8 px-4">
<div className="flex flex-wrap -mx-4">
<div className="hidden md:block md:w-1/2 px-4">
  <div className="h-full w-full bg-cover rounded shadow-md" style="background-image: url('https://source.unsplash.com/random/1280x720')"></div>
</div>
<div className="md:w-1/2 h-auto px-4">
  <div className="mb-8"><Image className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
  <div><Image className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
</div>
</div>
</section>
      
<section className="py-8 px-4">
<div className="flex flex-wrap -mx-4">
<div className="md:w-1/2 px-4 mb-8 md:mb-0"><Image className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
<div className="md:w-1/2 px-4 mb-8 md:mb-0"><Image className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
</div>
</section> */}

                {
                    !pagefor &&
                    <section className="pt-8 px-4">
                        <div className="flex flex-wrap -mx-4">
                            {medGallery.map(item => (
                                <>
                                    <div id={item.id} className="md:w-1/3 px-4 mb-8"><Image className="rounded shadow-md" width={400} height={400} src={item.url} alt={item.name} /></div>
                                </>
                            ))}

                        </div>
                    </section>
                }
                <section className="py-8 px-4">
                    <div className="flex flex-wrap -mx-4 -mb-8">
                        {smGallery.map(item => (
                            <>
                                <div id={item.url} className="md:w-1/4 px-4 mb-8"><Image className="rounded shadow-md" width={300} height={240} src={item.url} alt={item.alt} /></div>
                            </>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Gallery