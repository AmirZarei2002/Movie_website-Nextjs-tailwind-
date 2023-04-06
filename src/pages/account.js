// innder components
import AccountForm from '../components/account/AccountForm';
import AccountLogo from '../components/account/AccountLogo';

export default function Account() {
    return (
        <main className="relative">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <AccountLogo />
                    <AccountForm />
                </div>
            </div>
        </main>
    );
}
