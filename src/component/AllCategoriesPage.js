  "use client";
import React, { useState } from "react";
import { PlusIcon, TDeleteIcon, TEditIcon } from "@/assets/icons";
import DefaultModal from "@/utils/DefaultModal";
import DynamicPagination from "@/components/common/Pagination";
import DeleteModalContent from "@/components/modalContent/DeleteModalContent";
import useCheckbox from "@/components/common/useCheckbox";
import CustomCheckBox from "@/components/common/CustomCheckBox";
import SearchInput from "@/components/common/SearchInput";
import CategoryModal from "./CategoryModal";
import NotAvailable from "./NotAvailable";
import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/navigation";
export default function AllCategoriesPage({ data }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null)
  const [modalTitle, setModalTitle] = useState('Add New Category')
  const [modalContent, setModalContent] = useState(null)
  const [search, setSearch] = useState("");
  const router = useRouter()
  const handlePageClick = (event) => setCurrentPage(event.selected + 1)

  const handleOpenModal = (item) => {
    setIsModalOpen(true);
    setModalTitle(item?.id ? 'Edit Category' : 'Add New Category');
    setModalContent(React.cloneElement(<CategoryModal setIsModalOpen={setIsModalOpen} item={item} />, { key: new Date().getTime() }))
  };

  const { handleCheckboxChange, handleSelectAll, isAllSelected } = useCheckbox(
    data?.categories,
    selectedItems,
    setSelectedItems
  );

  const handleDeleteClick = (item) => {
    setDeleteModalOpen(true)
    setDeleteItem(item)

  }

  const handleDelete = async () => {
    try {
      const response = await fetcher(`${process.env.NEXT_PUBLIC_BASE_URL}/categories/${deleteItem?.id}`, 'DELETE');
      console.log(response)
      if (response.success) {
        router.refresh()
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    } finally {
      setDeleteModalOpen(false);
    }
  };



  return (
    <div className="w-full bg-white px-[10px] rounded-md  relative">
      <div className="flex justify-between items-center py-[11px]">
        <h1 className="text-black-80 text-sm font-medium leading-[18.2px]">
          All Category
        </h1>
        <div className="flex  items-center  ">
          <SearchInput
            search={search}
            setSearch={setSearch}
            inputClass={"!justify-end"}
            titleClass={"!hidden"}
            divClass={`!p-0`}
          />
          <button
            onClick={handleOpenModal}
            className="theadPlusIcon ml-3 flex items-center justify-center w-[136px] h-7 
            gap-[5px] bg-blue-100 rounded text-sm font-normal leading-[18.2px] text-white"
          >
            <PlusIcon />
            Add Category
          </button>
        </div>
      </div>

      {data?.categories?.length > 0 ? (
        <div className="overflow-y-auto ">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-white font-medium leading-4">
                <td>
                  <div className="flex items-center gap-6">
                    <CustomCheckBox
                      custmClass={"border-white checkbox:!bg-white"}
                      state={isAllSelected}
                      setState={handleSelectAll}
                    />
                    SL
                  </div>
                </td>
                <td>Category Name</td>
                <td>Description</td>
                <td className="w-[172px]">
                  <p className="flex justify-center items-center">Action</p>
                </td>
              </tr>
            </thead>
            <tbody>
              {data?.categories?.map((item) => (
                <tr
                  key={item?.id}
                  className="categorieTr text-black-90 text-xs font-normal leading-4"
                >
                  <td>
                    <div className="flex items-center gap-6">
                      <CustomCheckBox
                        setState={() => handleCheckboxChange(item?.id)}
                        state={selectedItems.includes(item?.id)}
                      />
                      {item?.id}
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.description}</td>
                  <td>
                    <div className="flex justify-center items-center">
                      <div className="flex gap-2.5 items-center">
                        <button onClick={() => handleOpenModal(item)}>
                          <TEditIcon />
                        </button>
                        <button onClick={() => handleDeleteClick(item)}>
                          <TDeleteIcon />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <><NotAvailable /></>
      )}

      <div className="py-[15px]">
        {/* <DynamicPagination
          handlePageClick={handlePageClick}
          totalPage={totalPages}
          currentPage={currentPage}
        /> */}
      </div>

      <DefaultModal
        className="mt-[116px]"
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title={modalTitle}
        modalContent={modalContent}
      />

      <DefaultModal
        className="mt-[116px] py-1 px-[50px]"
        width={368}
        open={deleteModalOpen}
        setOpen={setDeleteModalOpen}
        header={false}
        modalContent={
          <div>
            {deleteModalOpen && (
              <DeleteModalContent setOpen={setDeleteModalOpen} handleDelete={handleDelete} deleteItem={deleteItem} />
            )}
          </div>
        }
      />
    </div>
  );
}
