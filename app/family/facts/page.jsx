import { SectionTitle, SectionWrapper } from "@/components/common";
import Image from "next/image";

const FactsHelp = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Facts Help" />

      <p className="text-xl mb-5">
        To log into FACTS (formally known as RenWeb) you will need the school
        code: <strong>TCS-CA</strong> and an
        <strong> email account</strong> registered with Tabernacle School .
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <div className="mb-5">
            <div>
              <p className="text-xl mb-5">
                Please provide your email address to the front office before
                attempting to login to FACTS.
              </p>
            </div>

            <p className="text-xl mb-5">
              The user name will be your email address as given to the
              school.You will pick your own password. The first time you login
              to FACTS – click on the Create New ParentsWeb Account.
            </p>
            <p className="text-xl mb-5">
              If you forgot your password you can click on the Forgot User
              Name/Password? link. If you need to change your email address or
              aren’t sure which address you gave to the school, please contact
              the front office either by phone (925) 685-9169 or by email.
            </p>

            <p className="text-xl">
              For billing and account questions please email Rebeca Shreve
              (RebecaS@tbs.org). For processing, banking, or transaction
              questions please contact Facts Financial at (866) 441-4637.
              Tabernacle does not have access to your banking/credit card
              account numbers or the ability to manually process credit card
              payments.
            </p>
          </div>
        </div>
        <div>
          <div>
            <a
              href="https://logins2.renweb.com/logins/ParentsWeb-Login.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={1000}
                height={1000}
                className="w-full"
                src="/family/facts-help.png"
                alt="facts login portal"
              />
            </a>
          </div>

          <div className="text-center mb-10">
            <a
              className="btn btn-primary capitalize text-xl w-full"
              target="_blank"
              rel="noopener noreferrer"
              href="https://logins2.renweb.com/logins/ParentsWeb-Login.aspx"
            >
              Facts Parent Login
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default FactsHelp;
