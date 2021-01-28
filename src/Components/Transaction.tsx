import React, {useContext} from 'react'
import { Row, Col, ListGroup,Spinner} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MyContext} from '../Context/MyContext'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import '../Styles/css/Amount.css'
import { TransactionType } from '../Types/Types'
function Transaction() {
    var {transactions, deleteTransaction} = useContext<TransactionType[]>(MyContext)

    const deleteTrans = (id:number) =>{
      deleteTransaction(id)
    }

    return (
        <>
            <Row style={{marginTop: '20px'}}>
                <Col xs={{ span: 10, offset: 2 }} lg={{ span: 4, offset: 4 }} md={{span: 8, offset: 2 }} sm={{span: 8, offset: 2 }}>
                    <h2>History</h2>
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col xs={{ span: 10, offset: 2 }} lg={{ span: 4, offset: 4 }} md={{span: 8, offset: 2 }} sm={{span: 8, offset: 2 }}>
                    <ListGroup>
                        {transactions.length > 0 && transactions.map((item:TransactionType) => {
                            return <ListGroup.Item className={item.income ? 'vla': 'vle'} key={item.id}><Row><Col><h6>{item.text}</h6></Col><Col><h6>{item.income ? item.income: (item.expense * -1)}</h6></Col><Col><FontAwesomeIcon icon={faTrash} onClick={(e) => deleteTrans(item.id)} style={{float:'right'}}/></Col></Row></ListGroup.Item>
                        })} 
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
  }
  
  export default Transaction;


