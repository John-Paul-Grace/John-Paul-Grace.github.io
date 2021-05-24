import React from "react";

const Skills = () => {
  return (
    <div
      className="col-start-1 col-span-2 row-start-4 ml-3
                 md:col-span-3 lg:col-start-2 lg:col-span-2 lg:row-start-3 lg:ml-0
                 row-span-1 mr-3 border-t-2 border-black"
    >
      <span className="text-xl font-bold">Skills & Technologies:</span>
      <table className="w-full text-center text-lg">
        <tr>
          <th>Languages</th>
          <th>Front-End</th>
          <th>Back-End</th>
          <th>Database</th>
        </tr>
        <tr>
          <td className="bg-gray-300">JavaScript</td>
          <td>React</td>
          <td className="bg-gray-300">Node.JS</td>
          <td>MySQL</td>
        </tr>
        <tr>
          <td>HTML5</td>
          <td className="bg-gray-300">JQuery</td>
          <td>Express.JS</td>
          <td className="bg-gray-300">MongoDB</td>
        </tr>
        <tr>
          <td className="bg-gray-300">CSS3</td>
          <td>Tailwind</td>
          <td className="bg-gray-300">Passport.JS</td>
        </tr>
        <tr>
          <td>Java</td>
          <td className="bg-gray-300">Bootstrap</td>
          <td>Socket.IO</td>
        </tr>
      </table>
    </div>
  );
}

export default Skills;