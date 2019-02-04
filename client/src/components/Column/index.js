import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd"
import Task from "../Task"
// import API from "../..//utils/brewAPI"


const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    padding: 8px;
`;

//min height in case there is nothing in it
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props=> (props.isDraggingOver ? "papayawhip": "white")}
    min-height: 100px 
    flex-grow: 1;
`;



export default class Column extends React.Component {

    
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                {(provided, snapshot) => (
                    <TaskList
                    ref={provided.innerRef}
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                        {provided.placeholder}
                    </TaskList>
                )}
                </Droppable>
            </Container >
        )
    }
}