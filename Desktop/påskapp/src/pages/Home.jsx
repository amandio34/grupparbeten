// Import necessary libraries and components 
import { useEasterFacts } from "../hooks/useEasterFacts";
import { Card } from "../components/compound/Card";
import { CardItem } from "../components/compound/CardItem";
import EasterImage from "../components/EasterImage";
import EasterFact from "../components/EasterFact";
import { useTheme } from "../context/ThemeContext";

// Define the Home component 
export default function Home() {
  const { fact, nextFact } = useEasterFacts();
  const theme = useTheme();
  // Set the background color and padding for the main container 

  return (
    <div style={{
      backgroundColor: theme.pink,
      minHeight: "100vh",
      padding: "2rem"
    }}>
      <Card>
        <CardItem>
          <h1 style={{ color: theme.purple }}>Glad Påsk!</h1>
        </CardItem>
        <CardItem>
          <EasterImage src="/images/easter-bunny_600x600.png" alt="Påskhare" />
        </CardItem>
        <CardItem>
          <EasterFact fact={fact} onNext={nextFact} />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <h1 style={{ color: theme.orange }}>Glad Kyckling!</h1>
        </CardItem>
        <CardItem>
          <EasterImage src="/images/chicken.png" alt="Påskkyckling" />
        </CardItem>
        <CardItem>
          <EasterFact fact={fact} onNext={nextFact} />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <h1 style={{ color: theme.blue }}>Här kommer Påskharen!</h1>
        </CardItem>
        <CardItem>
          <EasterImage src="/images/bunny1.png" alt="Påskharen" />
        </CardItem>
        <CardItem>
          <EasterFact fact={fact} onNext={nextFact} />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <h1 style={{ color: theme.pink }}>Påskägg!</h1>
        </CardItem>
        <CardItem>
          <EasterImage src="/images/egg.png" alt="Påskägg" />
        </CardItem>
        <CardItem>
          <EasterFact fact={fact} onNext={nextFact} />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <h1 style={{ color: theme.purple }}>Påskharen kommer med påskägg!</h1>
        </CardItem>
        <CardItem>
          <EasterImage src="/images/bunny2.png" alt="Påskägg" />
        </CardItem>
        <CardItem>
          <EasterFact fact={fact} onNext={nextFact} />
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <h1 style={{ color: theme.pink }}>Gulis hälsar!</h1>
        </CardItem>
        <CardItem>
          <EasterImage src="/images/yellowChicken.png" alt="Gul kyckling" />
        </CardItem>
        <CardItem>
          <EasterFact fact={fact} onNext={nextFact} />
        </CardItem>
      </Card>
    </div>
  );
}
