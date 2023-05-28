import { Page } from "../utils/styles";

export const PrivacyPolicyPage = () => {
    return (
        <Page>
            <a href="/">⬅️ Home</a>
            <div>
                <h1>Privacy Policy</h1>
                <p style={{ color: "gray"}}>Last updated & effective: 28/05/2023</p>
                <span>This privacy policy is defined solely for Discord bot, Core#3093.</span>
                <hr></hr>
                <h2>What data does Core store?</h2>
                <li>Guild/Server ID (e.g: <code>1110247919124226080</code>)</li>
                <h2>What does Core use this data for?</h2>
                <li>To identify what servers each custom command uses, they are stored in each of our "Custom Command Model" in our database.</li>
                <h2>Is this information shared anywhere?</h2>
                <li>Other than Discord, we will <strong>never share</strong> any of the guild data to any other 3rd party applications.</li>
                <h2>How can I delete this data?</h2>
                <li>You may kick Core#3093 from your server, which will:</li>
                <ul>Delete all stored Custom Commands on the server (removing data of your Guild/Server's ID)</ul>
                <h2>Can I contact you?</h2>
                <li>To contact me, <a href="https://discordapp.com/users/968247668973383716" target="_blank" rel="noreferrer">Skyy#0268</a>, you can reach out to me on the official Core Bot Discord server.</li>
                <hr></hr>
                <h2>Thank you for using Core.</h2>
                <span>You should also read:</span>
                <li><a href="https://discord.com/privacy">Discord's Privacy Policy</a></li>
            </div>
        </Page>
    );
};