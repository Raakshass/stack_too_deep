Healthchain
A blockchain-powered platform that enables secure healthcare data monetization while preserving user privacy. Users can earn rewards for sharing anonymized data, and institutions can obtain AI-driven insights without direct access to raw datasets.

Key Features
Privacy-Preserving Data Sharing – Users can opt-in to share anonymized healthcare data and receive token rewards.
AI-Driven Insights – Instead of accessing raw data, institutions can query an AI model trained on a federated dataset, ensuring complete data privacy.
Decentralized & Secure – Built on blockchain to ensure data integrity and security.
Setup Instructions
1. Install Dependencies
Navigate to the project root directory and install required dependencies:

bash
Copy
Edit
cd ..
npm install
For frontend dependencies:

bash
Copy
Edit
cd frontend
npm install
📌 Note: Use yarn add instead of npm install when adding new dependencies to avoid compatibility issues.

2. Configure Environment Variables
Ensure that all necessary .env variables are correctly set up before running the application.

3. Install Hardhat for Smart Contracts
We use Hardhat for Ethereum smart contract development. Install it using:

bash
Copy
Edit
yarn add hardhat
npx hardhat
4. Compile Smart Contracts
Run the following command to compile smart contracts:

bash
Copy
Edit
npx hardhat compile
5. Verify ABI Files
Ensure that the correct .json ABI files for smart contracts are present before deployment.

Running the Application
Start the Frontend
To launch the web interface, navigate to the frontend directory and run:

bash
Copy
Edit
cd frontend
npm start
Deploy Smart Contracts (Optional)
If deploying contracts to a local blockchain or testnet, use:

bash
Copy
Edit
npx hardhat run scripts/deploy.js --network <network_name>
Contributing
We welcome contributions! Feel free to open issues, submit pull requests, or suggest improvements.

