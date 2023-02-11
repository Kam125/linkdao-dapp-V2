import React from "react";

const FAQuestion = () => {
  return (
    <>
      <div
        id="earnfaq"
        className="gap-4 gap-lg-0 w-100 my-5 p-0 faq-container justify-content-between"
      >
        <div className="px-0 px-lg-2 ps-xl-0 mt-5">
          <h3 className="mb-3" style={{ color: "rgb(247, 247, 252)" }}>
            Stake FAQs
          </h3>
          <div className="faq-items-container p-3">
            {/* Accordion */}

            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What is LKD Staking?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    LKD Staking is an Earn solution that allows users to deposit
                    LKD tokens into an Audited, Ownership free staking smart
                    contract to earn rewards.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    What chains are available for LinkDao stake?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    Currently, LKD offers staking on BNB chain.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    What is LinkDao Recurring Pool?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    LinkDao offers recurring pool reward system which means
                    rewards occurring periodically.
                  </div>
                </div>
              </div>

              <div class="accordion-item" style={{ display: "none" }}>
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    What is LKD Staking?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    LKD Staking is an Earn solution that allows users to deposit
                    LKD tokens into an Audited, Ownership free staking smart
                    contract to earn rewards.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    How are rewards distributed from staking?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    The rewards are shown in real time on the Earn dApp and will
                    need to be claimed in order to transfer the rewards to the
                    user's wallet.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    How can I withdraw my assets?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    Follow these steps to withdraw assets:
                    <br />- Head to the earn section on LKD dApp where the
                    crypto assets are being staked.
                    <br />- Find the specific pool and click the withdraw
                    buttton <br />- Complete the transaction.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    What is APR?
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingSeven"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    Annual percentage rate (APR) is a percentage that reflects
                    the amount of money or interest you earn on an account over
                    the course of one entire year.
                  </div>
                </div>
              </div>
              {/*  */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingEight">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEight"
                    aria-expanded="false"
                    aria-controls="flush-collapseEight"
                  >
                    Will the APR reduce if I keep staking after my lock period
                    ends?
                  </button>
                </h2>
                <div
                  id="flush-collapseEight"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingEight"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    No, user will continue to receive their rewards based on the
                    Fixed APR.
                  </div>
                </div>
              </div>
              {/*  */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingNine">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseNine"
                    aria-expanded="false"
                    aria-controls="flush-collapseNine"
                  >
                    LinkDao staking is safe?
                  </button>
                </h2>
                <div
                  id="flush-collapseNine"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingNine"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    LinkDao offers 100% safe earning pools. All the smart
                    contracts in LinkDao DeFi platform is 100% Ownership free
                    and fully Audited by BlockSafu audited company.
                  </div>
                </div>
              </div>
              {/*  */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTen">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTen"
                    aria-expanded="false"
                    aria-controls="flush-collapseTen"
                  >
                    What is Ownership free smart contracts?
                  </button>
                </h2>
                <div
                  id="flush-collapseTen"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTen"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    The smart contracts which is not governed by any corncern
                    authority. A smart contract is a computer program or a
                    transaction protocol that is intended to automatically
                    execute, control or document events and actions according to
                    the terms of a contract or an agreement.
                  </div>
                </div>
              </div>
              {/*  */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingEleven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseEleven"
                    aria-expanded="false"
                    aria-controls="flush-collapseEleven"
                  >
                    How can I access the LinkDao DeFi platform.
                  </button>
                </h2>
                <div
                  id="flush-collapseEleven"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingEleven"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body px-4">
                    The LinkDao DeFi platform can be access through any web3
                    crypto wallet and mobile wallet which contains dApp browser.
                    The recommended Web3 crypto wallet is Metamask and Mobile
                    wallet is Trust wallet.
                  </div>
                </div>
              </div>
              {/*  */}
            </div>

            {/* Accordion */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQuestion;
