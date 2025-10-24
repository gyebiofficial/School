import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

function Input(){
    const [userInput, setUserInput] = useState("");
    function handleEmailChange(e){
        setUserInput(e.target.value);
    }
    const [firstName, setFirstName] = useState("");
    function handleFirstNameChange(e){
        setFirstName(e.target.value);
        }
    const [lastName, setLastName] = useState("");
    function handleLastNameChange(e){
        setLastName(e.target.value);
        }
    const [age, setAge] = useState("");
    function handleAgeChange(e){
        setAge(e.target.value);
        }
    const [classContainer, setClassContainer] = useState("");
    function handleClassChange(e){
        setClassContainer(e.target.value);
        }
    const [student, setStudent] = useState("");
    function handleStudentChange(e){
        setStudent(e.target.value);
        }
    return(
        <>
        <form>
        <div className={styles.emailContainer}>
            <label htmlFor="email">Email:</label>
            <input type="text" value={userInput} onChange={handleEmailChange} placeholder="Type something..."/>
            
        </div> 
        </form>

        <div className={styles.firstnameContainer}>
            <label htmlFor="name">First Name:</label>
            <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder="Type your first name..."/>
            
        </div>
        <div className={styles.lastnameContainer}>
            <label htmlFor="name">Last Name:</label>
            <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Type your last name..."/>
        </div>

        <div className={styles.ageContainer}>
            <label htmlFor="age">Age:</label>
            <input type="text" value={age} onChange={handleAgeChange} placeholder="Type your age..."/>
        </div>

        <div className={styles.classContainer}>
            <label htmlFor="class">Class:</label>
            <input type="text" value={classContainer} onChange={handleClassChange} placeholder="Type your class..."/>
        </div>
        <div className={styles.studentContainer}>
            <label htmlFor="student">Student ID:</label>
            <input type="text" value={student} onChange={handleStudentChange} placeholder="Type your student ID..."/>
        </div>
       
        </>
    )
}
export default Input;