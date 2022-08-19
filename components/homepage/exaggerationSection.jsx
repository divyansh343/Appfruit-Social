import Image from 'next/image'

const ExaggerationSection = () => {
  return (
    <div className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 md:px-12 xl:px-32">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Top leading Influencers</h2>
                        </div>
                        <div className="grid gap-12 items-center md:grid-cols-3">
                            <div className="space-y-4 text-center">
                                <Image class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                                    src="https://wp.missmalini.com/wp-content/uploads/2020/04/Untitled-collage-1-3.jpg" alt="woman" loading="lazy" width="640" height="805" />
                                <div>
                                    <h4 className="text-2xl">Mahesh keshwala</h4>
                                    <span className="block text-sm text-gray-500">Thugesh</span>
                                </div>
                            </div>
                            <div className="space-y-4 text-center">
                                <Image class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                                    src="https://dhruvrathee.com/images/dr-vlogs.jpg" alt="dhurv rathee" loading="lazy" width="640" height="805" />
                                <div>
                                    <h4 className="text-2xl">Dhurv rathee</h4>
                                    <span className="block text-sm text-gray-500">Dhurv Rathee / blogs</span>
                                </div>
                            </div>
                            <div className="space-y-4 text-center">
                                <Image class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                                    src="https://im.rediff.com/movies/2021/jun/09prajakta3.jpg?w=670&h=900" alt="dhurv rathee" loading="lazy" width="640" height="805" />
                                <div>
                                    <h4 className="text-2xl">Prajakta Koli</h4>
                                    <span className="block text-sm text-gray-500">Mostlysane</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default ExaggerationSection