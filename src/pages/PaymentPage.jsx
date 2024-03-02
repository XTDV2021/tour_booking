import React, { useState } from "react";
import { Layout, Form, Input, Button, message } from "antd";
import { Steps } from "antd";
import "./paymentPage.css";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    message.success("Payment successful!");
    setCurrentStep(2);
  };

  return (
    <div className="horizontal-card" style={{ margin: "90px" }}>
      <Layout className="payment-page">
        <Content>
          <div className="payment-form">
            <h1 className="payment-header">Payment Information</h1>
            <Steps current={currentStep} className="progress-bar">
              <Steps.Step title="Fill in information" />
              <Steps.Step title="Payment" />
              <Steps.Step title="Confirmation" />
            </Steps>
            <Form layout="vertical">
              <Form.Item
                label="Full Name"
                required
                tooltip="This is a required field"
              >
                <Input
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                />
              </Form.Item>
              <Form.Item
                label="Card Number"
                required
                tooltip="This is a required field"
              >
                <Input
                  value={formData.cardNumber}
                  onChange={(e) =>
                    handleInputChange("cardNumber", e.target.value)
                  }
                />
              </Form.Item>
              <Form.Item
                label="Expiration Date"
                required
                tooltip="This is a required field"
              >
                <Input
                  value={formData.expirationDate}
                  onChange={(e) =>
                    handleInputChange("expirationDate", e.target.value)
                  }
                />
              </Form.Item>
              <Form.Item
                label="CVV"
                required
                tooltip="This is a required field"
              >
                <Input
                  value={formData.cvv}
                  onChange={(e) => handleInputChange("cvv", e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={handlePayment}>
                  Pay Now
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default PaymentPage;
