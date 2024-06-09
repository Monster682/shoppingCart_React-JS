import React, { useState } from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';
import PaymentPage from './PaymentPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Routes, Route, useNavigate } from 'react-router-dom';
import tshirtImage from './Assets/T-Shirt-7-1.png';
import BagImage from './Assets/BagImage.PNG';
import HoddieImage from './Assets/front-basic-white-orange-hoodie-isolated_1308-63192.jpg';

function App() {
    const [courses, setCourses] = useState([
        { id: 1, name: 'T-shirt', price: 499, image: tshirtImage },
        { id: 2, name: 'Bag', price: 1299, image:  BagImage },
        { id: 3, name: 'Hoodie', price: 699, image: HoddieImage }
    ]);

    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
    const navigate = useNavigate();

    const addCourseToCartFunction = (course) => {
        const alreadyCourses = cartCourses.find(item => item.product.id === course.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === course.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: course, quantity: 1}]);
        }
    };

    const deleteCourseFromCartFunction = (Course) => {
        const updatedCart = cartCourses.filter(item => item.product.id !== Course.id);
        setCartCourses(updatedCart);
    };

    const totalAmountCalculationFunction = () => {
        return cartCourses.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };

    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );

    return (
        <div className="App">
            <SearchComponent 
                searchCourse={searchCourse} 
                courseSearchUserFunction={courseSearchUserFunction} 
                cartItemCount={cartCourses.length} 
            />
            <main className="App-main">
                <Routes>
                    <Route path="/" element={
                        <ShowCourseComponent
                            courses={courses}
                            filterCourseFunction={filterCourseFunction}
                            addCourseToCartFunction={addCourseToCartFunction}
                        />
                    } />
                    <Route path="/cart" element={
                        <UserCartComponent
                            cartCourses={cartCourses}
                            deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                            totalAmountCalculationFunction={totalAmountCalculationFunction}
                            setCartCourses={setCartCourses}
                            onProceedToPayment={() => navigate('/payment')}
                        />
                    } />
                    <Route path="/payment" element={
                        <PaymentPage 
                            cartCourses={cartCourses} 
                            totalAmount={totalAmountCalculationFunction()} 
                        />
                    } />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
