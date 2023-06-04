import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import axios from 'axios';

export default function TestimonialApp() {
  const [testimonials, setTestimonials] = useState();
  const [items, setItems] = useState([]);
  // const handleClick = () => {
  //     console.log("click")
  // }

  const fetchData = async () => {
    try {
      const response = await axios(`https://jsonplaceholder.typicode.com/${testimonials}`);
      const data = response.data;
      setItems(data);
    } catch (error) {
      console.log(error);
      setItems([]);
    }
  };

  useEffect(() => {
   fetchData()
  }, [testimonials]);

  return (
    <div className="container m-auto">
      <Title text={'Testimonial App'} />
      <Button
        text={'Posts'}
        btnClass="btn-info"
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonials('Posts')}
      />
      <Button
        text={'Users'}
        btnClass="btn-info"
        icon={<FaUserAlt />}
        onClick={() => setTestimonials('Users')}
      />
      <Button
        text={'Comments'}
        btnClass="btn-info"
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials('Comments')}
      />
      <Title
        classes={'subtitle text-primary'}
        text={!testimonials ? 'Select from above!' : testimonials}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div key={item.id} className="card card-primary mb-2">
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                    <h4>{item.body}</h4>
                </div>
                {item.email && <small className="card-footer">{item.email}</small>}
              </div>
            );
          })}
    </div>
  );
}
