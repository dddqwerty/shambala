import GoalCard from 'components/goalCard'
import { motion } from 'framer-motion'

export const Mobile = () => {
  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div variants={item} className="md:hidden mt-48 grid gap-[32px]">
      <GoalCard
        index="01"
        desc="Rehabilitation will be carried out in desert areas by planting trees suitable for the specifics of the land."
      />
      <GoalCard index="02" desc="Work within the framework of the Sustainable Development Goals." />
      <GoalCard index="03" desc="Renewable energy infrastructure development." />
      <GoalCard index="04" desc="Reduce urban concentration by combining art and technology." />
      <GoalCard index="05" desc="Promoting innovation." />
    </motion.div>
  )
}
