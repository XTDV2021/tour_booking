import React, { useState, useRef, useEffect } from "react";
import {
  Layout,
  Menu,
  Carousel,
  Button,
  Card,
  Typography,
  Rate,
  Row,
  Col,
  Modal,
  Calendar,
} from "antd";
import { EnvironmentFilled, CalendarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const ToursDanang = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [tourPrice, setTourPrice] = useState({
    "2024-03-03": 750000,
    "2024-03-09": 800000,
    "2024-03-10": 850000,
  });

  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const bookingNavigate = useNavigate();
  const tourSectionRef = useRef(null);

  const scrollToTourSection = () => {
    tourSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const carouselImages = [
    [
      "https://i.ytimg.com/vi/tWEz2zOnYFs/maxresdefault.jpg",
      "https://media.istockphoto.com/id/1357445596/photo/dragon-bridge-in-da-nang-city.webp?b=1&s=170667a&w=0&k=20&c=QIralpxqOKNBRe1E7r_eKPihgl4fT92cU8vb7bWjMKw=",
      "https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-cau-Rong-Da-Nang-1.jpg",
      "https://hanoitop10.com/wp-content/uploads/2023/01/hinh-anh-cau-rong-da-nang_4.jpg",
    ],
  ];

  const handleBookTour = () => {
    bookingNavigate("/booking");
  };

  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

  const handleTourPriceChange = (value) => {
    setTourPrice({ ...tourPrice, [selectedDate]: value });
  };

  const handleOpenCalendarModal = () => {
    setIsCalendarVisible(true);
  };

  const handleCloseCalendarModal = () => {
    setIsCalendarVisible(false);
  };

  const handleCalendarButtonClick = () => {
    handleOpenCalendarModal();
  };

  useEffect(() => {
    // Optional: To ensure the floating box doesn't overlap content on resize
    const updateBoxPosition = () => {
      const floatingBox = document.getElementById("floating-box");
      if (window.innerWidth < 992) {
        // Adjust the breakpoint as needed
        floatingBox.style.display = "none";
      } else {
        floatingBox.style.display = "block";
      }
    };

    window.addEventListener("resize", updateBoxPosition);

    return () => {
      window.removeEventListener("resize", updateBoxPosition);
    };
  }, []);

  return (
    <Layout className="landing-page">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Trang chủ</Menu.Item>
          <Menu.Item key="2">Giới thiệu</Menu.Item>
          <Menu.Item key="3">Liên hệ</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "90px 100px" }}>
        <div className="site-layout-content">
          <div style={{ marginTop: "70px", marginBottom: "50px" }}>
            <Carousel
              autoplay
              autoplaySpeed={4000}
              style={{ width: "92%", height: "600px", margin: "50px" }}
            >
              {carouselImages.map((imageGroup, index) => (
                <div key={index}>
                  <div style={{ textAlign: "left" }}>
                    <h1
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        marginBottom: "20px",
                        display: "flex",
                      }}
                    >
                      <EnvironmentFilled /> Đà Nẵng - Tour
                    </h1>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={imageGroup[0]}
                        alt={`Image ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "400px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {imageGroup.slice(1).map((imageUrl, imageIndex) => (
                        <div
                          key={imageIndex}
                          style={{
                            width: "200%",
                            border: "1px solid #ccc",
                            borderRadius: "1px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={imageUrl}
                            alt={`Image ${index + 1}.${imageIndex + 1}`}
                            style={{
                              width: "200%",
                              height: "200px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div style={{ padding: "55px", maxWidth: "1700px", margin: "0 auto" }}>
          <Row gutter={19}>
            <Col span={18}>
              <Card style={{ marginBottom: "0px" }}>
                <Title level={4}>Thông tin tour</Title>
                <Rate disabled defaultValue={4.5} />
                <Text> 9.2 Tuyệt vời | Từ 34 đánh giá </Text>
                <br />
                <br />
                <div
                  style={{
                    width: "700px",
                  }}
                >
                  <Text
                    strong
                    style={{
                      fontSize: "16px",
                      color: "#333",
                    }}
                  >
                    Dưới đây là một phần nhỏ của những trải nghiệm tuyệt vời bạn
                    sẽ có trong chuyến hành trình tại Đà Nẵng. Ngoài ra, bạn còn
                    có cơ hội tham quan các điểm đến nổi tiếng như Chùa Hương,
                    Khu di tích Lịch sử Thăng Long, Văn Miếu - Quốc Tử Giám, và
                    nhiều địa điểm khác.
                  </Text>
                  <br />
                </div>

                <div class="schedule">
                  <div class="schedule-item">
                    <div class="time">07:30-12:00</div>
                    <div>
                      Xe cùng hướng dẫn viên đón khách tại khách sạn khởi hành
                      đi thăm Vịnh Hạ Long (chỉ áp dụng với vé khởi hành từ Hà
                      Nội).
                    </div>
                  </div>
                  <div class="schedule-item">
                    <div class="time">12:00-12:15</div>
                    <div>
                      Quý khách đến bến cảng tàu Hạ Long và làm thủ tục lên tàu.
                    </div>
                  </div>
                  <div class="schedule-item">
                    <div class="time">12:15-14:00</div>
                    <div>
                      Tàu rời bến bắt đầu chuyến thăm quan du ngoạn Vịnh Hạ
                      Long, tàu sẽ đi ngang qua các hòn đá lớn nhỏ với tên gọi
                      đặc biệt như: Hòn Gà Chọi, hòn Chó Đá, hòn Đỉnh Hương. Quý
                      khách dùng bữa cơm trưa trên tàu.
                    </div>
                  </div>
                  <div class="schedule-item">
                    <div class="time">14:00-16:30</div>
                    <div>
                      Quý khách thăm quan Hang Sửng Sốt, một trong những hang
                      động đẹp nhất vịnh Hạ Long. Tiếp đó, tàu di chuyển đến
                      Hang Luồn, du khách có thể chèo kayak/đò hoặc nghỉ ngơi
                      trên tàu. Tiếp theo, tàu sẽ đưa khách đến với đảo Ti Top.
                      Quý khách có thể tắm biển tại bãi tắm TiTop với bãi cát
                      trắng, hoặc trekking leo lên đỉnh núi Ti Top ngắm nhìn
                      toàn cảnh Vịnh Hạ Long.
                    </div>
                  </div>
                  <div class="schedule-item">
                    <div class="time">16:30-18:00</div>
                    <div>
                      Quay trở lại tàu để khởi hành về lại cảng Hạ Long. Quý
                      khách có thể nghe nhạc và thư giãn trên boong tàu, hòa
                      mình vào thiên nhiên.
                    </div>
                  </div>
                  <div class="schedule-item">
                    <div class="time">18:00-21:30</div>
                    <div>
                      Tàu cập bến. Chia tay nhà tàu và lên xe về Đà Nẵng (chỉ áp
                      dụng với vé khởi hành từ Đà Nẵng). Kết thúc tour.
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Title level={3} style={{ color: "#FF8C00" }}>
                    {tourPrice[selectedDate]} 1000$
                  </Title>

                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={scrollToTourSection}
                    style={{
                      backgroundColor: "#FF8C00",
                      borderColor: "#FF8C00",
                    }}
                  >
                    Đặt Tour Ngay
                  </Button>
                </div>
              </Card>
              <div
                id="floating-box"
                style={{
                  position: "fixed",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1000,
                  background: "white",
                  padding: "1rem",
                  borderRadius: "4px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  display: window.innerWidth < 992 ? "none" : "block", // Hide on smaller screens
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <strong>Hỗ trợ khách hàng</strong>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  Hotline: <a href="tel:19001888">1900 1888</a>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  Email:{" "}
                  <a href="mailto:info@saigontourist.net">Hella@email.net</a>
                </div>
                <Button
                  type="primary"
                  style={{ backgroundColor: "#FF8C00", borderColor: "#FF8C00" }}
                >
                  Bạn muốn được gọi lại?
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        <div ref={tourSectionRef}>
          <div
            style={{
              padding: "55px",
              maxWidth: "1700px",
              marginBottom: "0px",
              marginTop: "-90px",
            }}
          >
            <Card title="Tour ghép - Khởi hành tại Phú Quốc">
              <Row gutter={16}>
                <Col span={24}>
                  <Button
                    type="primary"
                    icon={<CalendarOutlined />}
                    onClick={handleCalendarButtonClick}
                    style={{ marginBottom: 16, borderRadius: "8px" }}
                  >
                    Xem lịch
                  </Button>
                  <Modal
                    title="Lịch"
                    visible={isCalendarVisible}
                    onCancel={handleCloseCalendarModal}
                    footer={null}
                    width={800}
                  >
                    <Calendar fullscreen={false} />
                  </Modal>
                  <Button.Group>
                    {[...Array(11).keys()].map((day) => (
                      <Button
                        key={day}
                        className="date-pill"
                        onClick={() => handleDateChange(`${day + 13} thg 3`)}
                      >
                        {day + 13} thg 3
                      </Button>
                    ))}
                  </Button.Group>
                </Col>
              </Row>
              <Card>
                <Row align="middle" justify="space-between">
                  <Col>
                    <Title level={4} style={{ color: "#FF8C00" }}>
                      {tourPrice[selectedDate]} Tour ghép cho tối đa 40 khách -
                      Khởi hành TPHCM | Bay Vietjet Air
                    </Title>
                  </Col>
                  <Col>
                    <Button
                      type="primary"
                      className="booking-button"
                      style={{ backgroundColor: "#FF8C00" }}
                      onClick={handleBookTour}
                    >
                      Đặt Tour Ngay
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Card>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>©2024 by Travel Agency</Footer>
    </Layout>
  );
};

export default ToursDanang;
