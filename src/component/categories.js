const Categories = async ({ searchParams }) => {
  const apiURL = `${process.env.NEXT_PUBLIC_BASE_URL}/categories?${searchParams?.q ? `q=${searchParams?.q}&` : ''}per_page=${searchParams?.per_page ? `${searchParams.per_page}` : 15}`
  const { data } = await fetcher(apiURL);
  // if (!data) {
  //   return <div className='text-center'>loading...</div>
  // }
  return (
    <AllCategoriesPage data={data} />
  )
}
