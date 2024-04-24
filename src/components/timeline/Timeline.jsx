import React from 'react'
import "./timeline.css"

const Timeline = () => {
    return (
        <div style={{ backgroundColor: "#2e8b57" }}>
            <div class="timeline">
                <div class="timeline__component">
                    <div class="timeline__date timeline__date--right"> Groveland, FL | 10.2023 - 02.2024</div>
                </div>
                <div class="timeline__middle">
                    <div class="timeline__point"></div>
                </div>
                <div class="timeline__component timeline__component--bg">
                    <h3 class="timeline__title">McDonnalds - crew member</h3>
                    <p class="timeline__paragraph">
                    Provided exceptional customer service, ensuring satisfaction and repeat business.<br />Operated various kitchen equipment and machinery efficiently and safely.<br />Collaborated effectively with team members to achieve operational goals and maintain a positive work environment,
                    </p>
                </div>

                <div class="timeline__component timeline__component--bg">
                    <h3 class="timeline__title">Lotte Plaza Market - Cashier</h3>
                    <p class="timeline__paragraph">
                    Utilized exceptional communication and customer service skills to ensure a seamless checkout experience, addressing customer
                    inquiries and concerns promptly, fostering a positive shopping environment.
                    </p>
                </div>
                <div class="timeline__middle">
                    <div class="timeline__point"></div>
                </div>

                <div class="timeline__component">
                    <div class="timeline__date">Orlando, FL | 03.2022 - 09.2022 </div>
                </div>

                <div class="timeline__component">
                    <div class="timeline__date timeline__date--right">Clermont, FL | 06.2021 - 12.2021</div>
                </div>
                <div class="timeline__middle">
                    <div class="timeline__point"></div>
                </div>
                <div class="timeline__component timeline__component--bg">
                    <h3 class="timeline__title">Bravos Supermarket - Cashier</h3>
                    <p class="timeline__paragraph">
                    Employed strong teamwork skills to collaborate effectively with colleagues, ensuring accuracy in financial transactions and
                    maintaining accountability in money counting, leveraging numerical proficiency to uphold precise monetary records.
                    </p>
                </div>

                <div class="timeline__component timeline__component--bottom timeline__component--bg">
                    <h3 class="timeline__title">Rubios Mexican Store</h3>
                    <p class="timeline__paragraph">
                    Employed attention to detail and adherence to culinary instructions to support kitchen operations, contributing to efficient food
                    preparation and maintaining high-quality standards in meal production
                    </p>
                </div>
                <div class="timeline__middle">
                    <div class="timeline__point"></div>
                    <div class="timeline__point timeline__point--bottom"></div>
                </div>
                <div class="timeline__component timeline__component--bottom">
                    <div class="timeline__date">Mascotte, FL | 12.2020 - 05.2021</div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
