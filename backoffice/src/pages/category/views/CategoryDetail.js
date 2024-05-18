import React from 'react'
import { getcategory } from '../../../store/category';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function CategoryDetail() {
  const{id}=useParams()
  console.log(id,'id');
    const category = useSelector((state) => state.category?.category)

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getcategory(1))

    }, [])
    console.log(category,'catego');
  return (
    <div>
      
    </div>
  )
}
