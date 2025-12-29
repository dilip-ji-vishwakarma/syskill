import {
  Box,
  Counter,
  Expression,
  ExpressionCard,
  PageTitle,
  QuestionCard,
  Title,
  VariableCard,
  VisualCard,
} from "@/components/core";
import { Paragraph } from "@/components/core/typography";

export default function Home() {
  const questions = [
    {
      id: 1,
      question: "Which of the following terms are 'Like Terms'?",
      options: [
        { id: 1, label: "3x and 4y", isCorrect: false },
        { id: 2, label: "5x and 5", isCorrect: false },
        { id: 3, label: "2x and 7x", isCorrect: true },
        {
          id: 4,
          label: (
            <>
              x and x<sup>2</sup>
            </>
          ),
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which is a prime number?",
      options: [
        { id: 1, label: "8", isCorrect: false },
        { id: 2, label: "13", isCorrect: true },
        { id: 3, label: "21", isCorrect: false },
      ],
    },
  ];

  return (
    <Box className="container mx-auto px-4 space-y-4 my-5">
      <PageTitle
        title="Algebraic Expressions"
        titleClassName="text-xl md:text-2xl lg:text-3xl"
        subtitle="Variables are just placeholders for numbers."
      />
      <Paragraph>
        An algebraic expression is made up of <strong>terms.</strong>
      </Paragraph>
      <Paragraph>
        In math, we call this <strong>{`"Combining Like Terms".`}</strong>
      </Paragraph>
      <VisualCard>
        <Box className="md:flex items-start justify-center md:gap-28 mb-8 text-center md:space-y-0 space-y-5">
          <VariableCard
            icon={<span className="text-[56px] mb-3">🍎</span>}
            title={"Variable 'a' (Apples)"}
          >
            <Counter initialValue={2} min={0} max={10} />
          </VariableCard>
          <VariableCard
            icon={<span className="text-[56px] mb-3">🍌</span>}
            title={"Variable 'b' (Bananas)"}
          >
            <Counter initialValue={2} min={0} max={10} />
          </VariableCard>
        </Box>
        <ExpressionCard className="my-10">
          <Title
            as="h4"
            className="mb-4 text-xs tracking-widest"
            textColor="text-secondary dark:text-secondary-foreground"
          >
            THE ALGEBRAIC EXPRESSION
          </Title>

          <Expression
            terms={[
              { value: "x", tone: "accent" },
              { value: 5, tone: "default" },
              { value: "y", tone: "muted" },
            ]}
            separator="+"
          />

          <Paragraph className="text-secondary dark:text-secondary-foreground mt-6 text-sm">
            {`Notice: You cannot combine them into "5ab" because they are different fruits (variables)!`}
          </Paragraph>
        </ExpressionCard>
      </VisualCard>

      <Box className="space-y-6">
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q.question} options={q.options} />
        ))}
      </Box>
    </Box>
  );
}
