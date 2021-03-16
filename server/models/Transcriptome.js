const Transcriptome = sequelize.define("transcriptome", {
  transcriptomeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  transcriptomeEnsemblLink: { type: DataTypes.CHAR, allowNull: true },
  transcriptomeStartCoord: { type: DataTypes.BIGINT, allowNull: true },
  transcriptomeEndCoord: { type: DataTypes.BIGINT, allowNull: true },
  geneId: { type: DataTypes.INTEGER, allowNull: true },
  ensemblId: { type: DataTypes.CHAR, allowNull: true },
});

// Add foreign key (geneId)