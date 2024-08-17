import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from '../components/Header'

export const Service = () => {
    return (
        <div>
            <Header
                isVideo={false}
                src={null}
            />

            <p className='txt-center'>Last updated: November 24, 2023</p>
            <h1 className='service'>Terms of Service</h1>

            <section className="privacy-policy-section">
                <Container>
                    <div className="privacy-policy-card">
                        <ol>
                            <li>
                                <h3>Acceptance of Terms</h3>
                                <p className="privacy-policy-introduction">
                                    By using PressionC, a Virtual Meeting Platform For Online
                                    Conference Video, you agree to comply with these Terms of
                                    Service.
                                </p>
                            </li>
                            <li>
                                <h3>Use of Services</h3>
                                <ul>
                                    <li>
                                        You agree to use our services in accordance with all
                                        applicable laws and regulations. You are responsible for
                                        maintaining the confidentiality of your account information.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3>User Conduct</h3>
                                <ul>
                                    <p className="terms-of-service-introduction">
                                        You agree not to engage in any conduct that may:
                                    </p>
                                    <div style={{ marginTop: "-12px" }}>
                                        <li>Violate any laws or regulations</li>
                                        <li>Infringe upon the rights of others</li>
                                        <li>
                                            Disrupt the functionality or security of our services
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <h3>Intellectual Property</h3>
                                <ul>
                                    <p className="terms-of-service-introduction">
                                        All content and materials available on our website are
                                        protected by intellectual property laws. You may not use our
                                        content without permission.
                                    </p>
                                </ul>
                            </li>
                            <li>
                                <h3>Limitation of Liability</h3>
                                <ul>
                                    <p className="terms-of-service-introduction">
                                        We are not liable for any damages or losses resulting from
                                        your use of our services.
                                    </p>
                                </ul>
                            </li>
                            <li>
                                <h3>Termination</h3>
                                <ul>
                                    <p className="terms-of-service-introduction">
                                        We reserve the right to terminate or suspend your access to
                                        our services at our discretion, without notice.
                                    </p>
                                </ul>
                            </li>
                            <li>
                                <h3>Governing Law</h3>
                                <ul>
                                    <p className="terms-of-service-introduction">
                                        These Terms of Service shall be governed by and construed in
                                        accordance with the laws of Australia.
                                    </p>

                                    <p
                                        className="terms-of-service-introduction"
                                        style={{ paddingTop: "30px" }}
                                    >
                                        This content is a starting point and may need adjustments to
                                        fit the specific nature of your web app. It's highly
                                        recommended to consult with legal professionals to ensure
                                        compliance with relevant laws and regulations in your
                                        jurisdiction
                                    </p>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </Container>
            </section>
        </div>
    )
}
