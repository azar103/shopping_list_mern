import React, {useState} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup, 
    Label,
    Input
} from 'reactstrap'
import {v1 as uuid} from 'uuid'
import { connect } from 'react-redux'
import {addItem} from '../reducers/actions'

function ItemModal(props) {
    const [modal, setModal]= useState(false)
    const [name, setName] = useState('')
    const toggle =() => {
        setModal(!modal)
    }
    const onChangeName =(e) => {
        setName(e.target.value)
    }

    const onSubmit =(e) => {
        e.preventDefault()
        const newItem = {
            name: name
        }
        props.dispatch(addItem(newItem))
        setName('')
        toggle()
    }
    return (
        <div>
             <Button
             color="dark"
             style={{marginBottom: '2rem'}}
             onClick={toggle}
             >
                 Add Item
             </Button>
             <Modal
             isOpen={modal}
             toggle={toggle}
             >
                 <ModalHeader
                 toggle={toggle}
                 >
                Add to shopping List
                 </ModalHeader>
                 <ModalBody>
                     <Form
                        onSubmit={onSubmit}
                     >
                     <FormGroup
                
                     >
                         <Label for="item">
                               Item
                         </Label>
                         <Input 
                          type="text"
                          name="name"
                          id="item"
                          value={name}
                          onChange={onChangeName}
                          placeholder="Add shopping item"
                         />
                         <Button
                         color="dark"
                         style={{marginBottom:'2rem'}}
                         >
                             Add
                         </Button>
                    </FormGroup>     

                     </Form>
                 </ModalBody>

             </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsReducer
    }
}

export default  connect(mapStateToProps)(ItemModal)