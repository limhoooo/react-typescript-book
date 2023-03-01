import { Row, Col, Input, Button } from 'antd';
import { useRef } from 'react';
import styles from './Signin.module.css'
const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    return (
        <Row align="middle" className={styles.signin_row}>
            <Col span={24} className={styles.signin_contents}>
                <Row>
                    <Col span={12}>
                        <img src="/bg_signin.png" className={styles.signin_bg} alt="" />
                    </Col>
                    <Col span={12}>
                        <div className={styles.signin_title}>My Books</div>
                        <div className={styles.signin_subtitle}>Please Note Your Opinion</div>
                        <div className={styles.signin_underline} />
                        <div className={styles.email_title}>
                            Email
                            <span className={styles.required}> *</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input ref={emailRef} className={styles.input} placeholder="Email" autoComplete="email" name="email" />
                        </div>
                        <div className={styles.password_title}>
                            Password
                            <span className={styles.required}> *</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input ref={passwordRef} className={styles.input} type='password' autoComplete="current-password" name="email" />
                        </div>
                        <div className={styles.button_area}>
                            <Button className={styles.button} size="large">Sign In</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Signin;