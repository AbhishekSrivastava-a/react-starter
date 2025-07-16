import {
  GoBell,
  GoRocket,
  GoAlertFill,
  GoShieldCheck,
  GoEyeClosed,
} from 'react-icons/go';
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log('Clicked or Hovered!');
  };

  return (
    <div className="space-y-4 p-6 bg-gray-100 min-h-screen">
      <div>
        <Button
          secondary
          outline
          rounded
          onClick={handleClick}
          className="hover:bg-gray-200 hover:scale-105 transition-transform duration-200"
        >
          <GoBell className="mr-2" />
          Notifications
        </Button>
      </div>

      <div>
        <Button
          danger
          outline
          onMouseEnter={handleClick}
          className="hover:bg-red-100 hover:text-red-700 hover:scale-105 transition duration-200"
        >
          <GoAlertFill className="mr-2" />
          Report Issue
        </Button>
      </div>

      <div>
        <Button
          warning
          onMouseLeave={handleClick}
          className="hover:bg-yellow-300 hover:scale-110 transition duration-200"
        >
          <GoRocket className="mr-2" />
          Launch Offer
        </Button>
      </div>

      <div>
        <Button
          success
          outline
          rounded
          className="hover:bg-green-100 hover:text-green-700 transition duration-200"
        >
          <GoShieldCheck className="mr-2" />
          Secure Access
        </Button>
      </div>

      <div>
        <Button
          primary
          rounded
          onMouseOver={handleClick}
          className="hover:bg-blue-600 hover:shadow-lg transition-transform duration-300"
        >
          <GoEyeClosed className="mr-2" />
          Hide Content
        </Button>
      </div>
    </div>
  );
}

export default App;
