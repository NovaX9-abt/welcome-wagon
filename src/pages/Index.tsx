import { SectionHeader } from "@/components/onboarding/SectionHeader";
import { StepCard } from "@/components/onboarding/StepCard";
import { SuccessMessage } from "@/components/onboarding/SuccessMessage";
import { WarningBlock } from "@/components/onboarding/WarningBlock";
import { CallToAction } from "@/components/onboarding/CallToAction";
import { OnboardingSection } from "@/components/onboarding/OnboardingSection";
import { ScreenshotSection1Step1 } from "@/components/onboarding/ScreenshotWithArrows";
import { ScreenshotSection2Step1 } from "@/components/onboarding/ScreenshotSection2Step1";
import { Separator } from "@/components/ui/separator";
import screenshotStep2 from "@/assets/screenshot_section1_step2.png";
import screenshotStep3 from "@/assets/screenshot_section1_step3.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        {/* Page Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Getting Started Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete these simple steps to set up your workspace. The entire process takes less than 5 minutes.
          </p>
        </div>

        {/* Section 1 - Create n8n Cloud account */}
        <OnboardingSection id="section-1">
          <SectionHeader
            title="Create your n8n Cloud account"
            subtitle="Follow these quick steps to create your n8n Cloud account. It takes less than 2 minutes."
          />

          <div className="space-y-6">
            <StepCard
              stepNumber={1}
              title="Step 1 — Go to n8n"
              imageContent={<ScreenshotSection1Step1 />}
            >
              <p>
                Open{" "}
                <a
                  href="https://n8n.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  n8n.io
                </a>{" "}
                and click <span className="font-semibold text-foreground">Get started for free</span>.
              </p>
            </StepCard>

            <StepCard
              stepNumber={2}
              title="Step 2 — Create your account"
              imageContent={<img src={screenshotStep2} alt="n8n signup form" className="w-full h-auto" />}
            >
              <p className="mb-3">Fill in the required fields to create your account.</p>
              <p className="bg-muted/50 rounded-lg p-3 text-sm">
                <span className="font-semibold text-foreground">Tip:</span> Choose an account name that represents your company or project.
              </p>
            </StepCard>

            <StepCard
              stepNumber={3}
              title="Step 3 — Answer onboarding questions"
              imageContent={<img src={screenshotStep3} alt="n8n onboarding questions" className="w-full h-auto" />}
            >
              <p className="mb-3">n8n will ask a few onboarding questions. Simply answer them to continue.</p>
              <p className="bg-muted/50 rounded-lg p-3 text-sm">
                <span className="font-semibold text-foreground">Important:</span> When asked "Which of these do you feel comfortable doing?", select:{" "}
                <span className="font-semibold text-foreground">Configuring API authentication</span>.
                Then click <span className="font-semibold text-foreground">OK</span>.
              </p>
            </StepCard>

            <SuccessMessage>Your n8n Cloud account is now ready 🎉</SuccessMessage>
          </div>
        </OnboardingSection>

        <Separator className="my-8" />

        {/* Section 2 - Invite AitonLab */}
        <OnboardingSection id="section-2">
          <SectionHeader
            title="Invite AitonLab to your n8n workspace"
            subtitle="To allow AitonLab to set up and deploy your workflows, you need to invite us to your n8n workspace. This takes less than 1 minute."
          />

          <div className="space-y-6">
            <StepCard
              stepNumber={1}
              title="Step 1 — Open project settings"
              imageContent={<ScreenshotSection2Step1 />}
            >
              <p>
                In your n8n dashboard, click <span className="font-semibold text-foreground">Settings</span> in the left sidebar.
              </p>
            </StepCard>

            <StepCard
              stepNumber={2}
              title="Step 2 — Open Users tab"
              imagePlaceholder="screenshot_section2_step2.png"
            >
              <p>
                Inside project settings, click <span className="font-semibold text-foreground">Users</span>.
              </p>
            </StepCard>

            <StepCard
              stepNumber={3}
              title="Step 3 — Invite AitonLab"
            >
              <p className="mb-3">
                Click <span className="font-semibold text-foreground">Invite</span> and enter this email address:
              </p>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm text-foreground select-all mb-3">
                sebaganwachristal134@gmail.com
              </div>
              <p>
                When asked for a role, select: <span className="font-semibold text-foreground">Member</span>
              </p>
              <p className="mt-2">
                Then click <span className="font-semibold text-foreground">Send invite</span>.
              </p>
            </StepCard>

            <SuccessMessage>
              Once accepted, AitonLab will have access to your workspace and can start setting up your workflows 🚀
            </SuccessMessage>
          </div>
        </OnboardingSection>

        <Separator className="my-8" />

        {/* Section 3 - Create OpenRouter API key */}
        <OnboardingSection id="section-3">
          <SectionHeader
            title="Create your OpenRouter API key"
            subtitle="To connect your AI models to n8n, you need to generate an OpenRouter API key. This takes less than 1 minute."
          />

          <div className="space-y-6">
            <StepCard
              stepNumber={1}
              title="Step 1 — Open API Keys page"
              imagePlaceholder="screenshot_section3_step1.png"
            >
              <p className="mb-3">Log in to your OpenRouter account.</p>
              <p>
                Then open the API Keys page:{" "}
                <a
                  href="https://openrouter.ai/settings/keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium break-all"
                >
                  https://openrouter.ai/settings/keys
                </a>
              </p>
            </StepCard>

            <StepCard stepNumber={2} title="Step 2 — Create a new API key">
              <p className="mb-3">
                Click <span className="font-semibold text-foreground">Create API Key</span>.
              </p>
              <p className="mb-3">
                Give your key a recognizable name, for example:{" "}
                <span className="font-mono bg-muted rounded px-2 py-1 text-foreground">AitonLab</span>
              </p>
              <p>
                Then click <span className="font-semibold text-foreground">Create</span>.
              </p>
            </StepCard>

            <StepCard stepNumber={3} title="Step 3 — Copy your API key">
              <p className="mb-3">OpenRouter will display your new API key.</p>
              <p className="mb-3">
                Click the <span className="font-semibold text-foreground">copy icon</span> to copy it.
              </p>
              <p>Store this key somewhere safe. You will need it in the next setup step.</p>
            </StepCard>

            <WarningBlock title="Important">
              Never share your API key publicly. Anyone with this key can make API calls that will be charged to your account.
            </WarningBlock>

            <SuccessMessage>Your OpenRouter API key is now ready 🔑</SuccessMessage>
          </div>
        </OnboardingSection>

        <Separator className="my-8" />

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto py-12">
          <CallToAction
            text="Prefer to do it together?"
            buttonText="Book a setup call"
            buttonLink="#book-call"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
