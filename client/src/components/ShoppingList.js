import React, {useState, useEffect} from 'react'
import {v1 as uuid} from 'uuid'
import { Container,  ListGroupItem, ListGroup } from 'react-bootstrap'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {Button} from 'reactstrap'
import { connect } from 'react-redux'
import {addItem, removeItem, getItems} from '../reducers/actions'
import { Circle } from 'react-spinners-css';
 function ShoppingList(props) {
    
    useEffect(() => {
         props.dispatch(getItems())
    }, [])
    const {items} = props.items
 
    const remove = id => {
        props.dispatch(removeItem(id))
    }


      return (
        <Container>
  
                  <ListGroup>
              <TransitionGroup className="shopping-list">
                  {
                      items.map(({_id, name}) => 
                      <CSSTransition
                      key={_id}
                      timeout={500}
                      classNames="fade"
                      >
                       <ListGroupItem>
                           <Button
                           color="danger"
                           className="remove-btn"
                           size="sm"
                           onClick={() => remove(_id)}
                           >&times;</Button>
                           {name}
                       </ListGroupItem>
                      </CSSTransition>
                      )
                  }
              </TransitionGroup>
          </ListGroup>  
        
    
        </Container>
    )
    
    } 

const mapStateToProps = state => {
    return {
        items: state.itemsReducer
    }
}


export default connect(mapStateToProps)(ShoppingList)
