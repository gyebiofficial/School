import React from "react";
import EduConnectLogo from "./assets/eduConnect1.png";
import styles from "./Header.module.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { useAuth, useUser, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

function Header(){
    const { isSignedIn, isLoaded } = useAuth();
    const { user } = useUser();

    // Show loading state while Clerk is initializing
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <img 
                        src={EduConnectLogo} 
                        alt="EduConnect Logo"
                    />
                    <div className={styles.brandText}>
                        <h1 className={styles.brandName}>EduConnect</h1>
                        <p className={styles.brandTagline}>Your gateway to knowledge</p>
                    </div>
                </div>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Home</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>About</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Contact</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Login</a></li>
                </ul>
                
                {/* Simple Conditional: UserButton if user exists, Icon if not */}
                {isSignedIn ? (
                    <div className={styles.userIconButton}>
                        <UserButton 
                            appearance={{
                                elements: {
                                    avatarBox: {
                                        width: '2.2rem',
                                        height: '2.2rem'
                                    },
                                    userButtonPopoverCard: {
                                        pointerEvents: 'initial'
                                    }
                                }
                            }}
                        />
                    </div>
                ) : (
                    <SignUpButton mode="modal">
                        <button className={styles.userIconButton}>
                            <FaRegCircleUser />
                        </button>
                    </SignUpButton>
                )}
            </nav>
        </header>
        
        <main className={styles.mainContent}>
            {/* Method 2: Logical AND - Only shows if condition is true */}
            {isSignedIn && (
                <div>
                    <h1 className={styles.welcomeTitle}>Welcome back, {user?.firstName}!</h1>
                </div>
            )}
            
            {/* Method 2: Logical AND - Only shows if condition is false */}
            {!isSignedIn && (
                <div>
                    <h1 className={styles.welcomeTitle}>Welcome to EduConnect</h1>
                </div>
            )}
            
            {/* <h2 className={styles.subtitle}>Empowering Education Through Technology</h2>
            <div className={styles.description}>
                Connecting students and educators worldwide through innovative learning solutions
            </div> */}
            <p className="text-gray-600 max-w-xl mb-6">
              A modern School Management System for Teachers, Students, and Administrators.
              Manage attendance, grades, fees, and communication all in one place.
           </p>
        </main>
        </>
    )
}
export default Header;