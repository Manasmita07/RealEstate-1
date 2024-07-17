import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const formDataToJSON = (formData) => {
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });
    return jsonObject;
  };

export const apiAddCommission = async (data) => {
    console.log(data);
  
    // Convert FormData to JSON
    const jsonData = formDataToJSON(data);
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL_BASE}/api/project_add_commission_handler/`,
        jsonData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response);
      if(response.status==201){
        toast.success("Commission added successfully")
        
      }else{
        toast.error("Failed to add commission!");
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };