import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/contacts/selectors';

const SearchBox = () => {
     
    const dispatch = useDispatch();
    const filters = useSelector(selectNameFilter);
    const onChangeFilter = (event) => {
        dispatch(changeFilter(event.target.value))
  }

    return (
        <label >Find your contacts
            <input  type="text" value={filters} onChange={onChangeFilter}/></label> 
  )
}

export default SearchBox