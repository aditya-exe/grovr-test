import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading tracking-tighter text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Build your product with the users
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Elevate your product development strategy with direct feedback from
            your ideal customers.
          </p>
          <div className="flex gap-3">
            <Button size="lg">Get started</Button>
            <Button size="lg" variant={"secondary"}>
              About us
            </Button>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.refresh />
              <div className="space-y-2">
                <h3 className="font-bold">Instant feedback</h3>
                <p className="text-sm text-muted-foreground">
                  Gather instant feedback from your target audience and get
                  product insights which allows you to take data driven
                  decisions for your product.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.users />
              <div className="space-y-2">
                <h3 className="font-bold">Customer First</h3>
                <p className="text-sm text-muted-foreground">
                  Build a customer centric product by including your users
                  directly in your development workflow/sprint and collaborate
                  with your users for product success.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.stockUp />
              <div className="space-y-2">
                <h3 className="font-bold">Greater Customer Engagement</h3>
                <p className="text-sm text-muted-foreground">
                  Achieve greater customer engagement with targeted feature
                  testing by empowering your product strategy with data-driven
                  decision making.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.fingerprint />
              <div className="space-y-2">
                <h3 className="font-bold">GroVr Tribe</h3>
                <p className="text-sm text-muted-foreground">
                  Tap into GroVr Tribe and get expert feedback and insights from
                  a large and diverse tester community. Unlock diverse testing
                  perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Pricing
          </p>
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Pricing for everyone
          </h2>
        </div>
        <div className="dark:text-gray-900 mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-3">
          <div className="border p-3 flex flex-col gap-y-3 bg-slate-200 rounded-md">
            <div>
              <h3 className="text-xl font-semibold">Free</h3>
              <p className="text-muted-foreground">
                Perfect for passion projects & simple websites.
              </p>
            </div>
            <div className="flex gap-1 items-end mt-2 p-2">
              <span className="text-3xl font-bold">$0</span>
              <span>/month/project</span>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">
                Get started with:{" "}
              </p>
              <ul className="gap-3 flex flex-col">
                <li className="flex items-center gap-2">
                  <Icons.tick />
                  Unlimited API requests
                </li>

                <li className="flex items-center gap-2">
                  <Icons.tick />
                  Up to 500MB database space
                </li>

                <li className="flex items-center gap-2">
                  <Icons.tick />
                  Up to 1GB file storage
                </li>

                <li className="flex items-center gap-2">
                  <Icons.tick />
                  Up to 50MB file uploads
                </li>
              </ul>
            </div>
            <Button>Get Started</Button>
          </div>
          <div className="border-4 border-violet-600 p-3 flex flex-col gap-y-3 bg-slate-200 rounded-md">
            <div>
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="text-muted-foreground">
                For production applications with the option to scale.
              </p>
            </div>
            <div className="flex gap-1 items-end mt-2 p-2">
              <span className="text-3xl font-bold">$25</span>
              <span>/month/project</span>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">
                Everythig in free plan, plus:{" "}
              </p>
              <ul className="gap-3 flex flex-col">
                <li className="flex items-center gap-2">
                  <Icons.tick />
                  No project pausing
                </li>

                <li className="flex items-center gap-2">
                  <Icons.tick />
                  8GB database space included
                </li>

                <li className="flex items-center gap-2">
                  <Icons.tick />
                  100GB file storage included
                </li>

                <li className="flex items-center gap-2">
                  <Icons.tick />
                  5GB file uploads included
                </li>
              </ul>
            </div>
            <Button>Get Started</Button>
          </div>
          <div className="border p-3 flex flex-col gap-y-3 bg-slate-200 rounded-md">
            <div>
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <p className="text-muted-foreground">
                Collaborate with different permissions and access patterns.
              </p>
            </div>
            <div className="flex gap-1 items-end mt-2 p-2">
              <span className="text-3xl font-bold">$599</span>
              <span>/month/project</span>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">
                Everything in pro plan, plus:{" "}
              </p>
              <ul className="gap-3 flex flex-col">
                <li className="flex items-center gap-2">
                  <Icons.tick />
                  Additional Organization member roles
                </li>

                <li className="flex items-center gap-2">
                  <Icons.tick />
                  Daily backups stored for 14 days
                </li>

                <li className="flex items-center gap-2">
                  <Icons.tick />
                  SOC2
                </li>

                <li className="flex items-center gap-2">
                  <Icons.tick />
                  HIPAA
                </li>
              </ul>
            </div>
            <Button>Get Started</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
