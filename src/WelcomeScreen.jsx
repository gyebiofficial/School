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
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Dashboard</a></li>
                </ul>
                {/* Conditional rendering based on authentication status */}
                {isSignedIn ? (
                    // Show UserButton when signed in (includes profile, sign out, etc.)
                    <UserButton 
                        appearance={{
                            elements: {
                                avatarBox: "w-12 h-12"
                            }
                        }}
                    />
                ) : (
                    // Show Sign Up button when not signed in
                    <div className={styles.authButtons}>
                        <SignUpButton mode="modal">
                            <button className={styles.userIconButton}>
                                <FaRegCircleUser />
                            </button>
                        </SignUpButton>
                    </div>
                )}
            </nav>
        </header>
        
        <main className={styles.mainContent}>
            <h1 className={styles.welcomeTitle}>Welcome to EduConnect</h1>
            <h2 className={styles.subtitle}>Empowering Education Through Technology</h2>
            <div className={styles.description}>
                Connecting students and educators worldwide through innovative learning solutions
            </div>
        </main>
        </>
    )
}
export default Header;