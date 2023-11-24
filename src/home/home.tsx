import { IntroductionComponent } from './introduction';
import { TechnologyComponent } from './technology';
import { ProfileComponent } from './profile';

export const HomeComponent = () => {
  return (
    <div>
      <IntroductionComponent />
      <TechnologyComponent />
      <ProfileComponent />
    </div>
  )
} 